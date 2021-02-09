package com.jobtrackie.jobapplications.resolvers

import org.springframework.stereotype.Component
import org.springframework.data.mongodb.core.MongoOperations

import com.jobtrackie.jobapplications.repository.ApplicationRepository
import graphql.kickstart.tools.GraphQLQueryResolver
import com.jobtrackie.jobapplications.model.Application

@Component
class ApplicationQueryResolver(
								val applicationRepository: ApplicationRepository,
								private val mongoOperations: MongoOperations
								) :  GraphQLQueryResolver {
	
	fun applications(): List<Application> {
		val appList = applicationRepository.findAll()
		return appList
	}
}

								