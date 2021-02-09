package com.jobtrackie.jobapplications.resolvers

import com.jobtrackie.jobapplications.model.Application
import com.jobtrackie.jobapplications.repository.ApplicationRepository
import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component
import com.jobtrackie.jobapplications.model.Status

@Component
class ApplicationMutationResolver(private val applicationRepository: ApplicationRepository): GraphQLMutationResolver {
	
	fun newApplication(name: String, company: String, position: String): Application {
		val application = Application(name, company, position)
		application.id = UUID.randomUUID().toString()
		applicationRepository.save(application)
		return application
	}
	
	fun deleteApplication(accountID: String): Boolean {
		applicationRepository.deleteById(accountID)
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