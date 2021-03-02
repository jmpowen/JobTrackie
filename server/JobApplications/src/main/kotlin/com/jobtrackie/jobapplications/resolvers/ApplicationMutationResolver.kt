package com.jobtrackie.jobapplications.resolvers

import com.jobtrackie.jobapplications.model.Application
import com.jobtrackie.jobapplications.model.Status
import com.jobtrackie.jobapplications.repository.ApplicationRepository

import graphql.kickstart.tools.GraphQLMutationResolver

import org.springframework.stereotype.Component
import org.springframework.beans.factory.annotation.Autowired

import java.time.LocalDateTime
import java.util.UUID

@Component
class ApplicationMutationResolver(
		@Autowired private val applicationRepository: ApplicationRepository
): GraphQLMutationResolver {

	fun newApplication(company: String, position: String): Application {
		val application = Application(
				accountId = UUID.randomUUID().toString(),
				date = LocalDateTime.now(),
				company = company,
				position = position,
				currentStatus = Status.PENDING)
		applicationRepository.save(application)
		return application
	}

	//how could false be returned?
	fun deleteApplication(accountId: String): Boolean {
		try {
			applicationRepository.deleteById(accountId)
		} catch(error : IllegalArgumentException){
			return false
		}
		return true
	}
	
	//status should just be string
	fun updateApplication(accountID: String, currentStatus: Status): Application {
		val application = applicationRepository.findById(accountID)
		application.ifPresent {
			it.currentStatus = currentStatus
			applicationRepository.save(it)
		}
		return application.get()
	}
}