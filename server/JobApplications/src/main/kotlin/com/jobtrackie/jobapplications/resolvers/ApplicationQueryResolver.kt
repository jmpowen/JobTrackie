package com.jobtrackie.jobapplications.resolvers

import org.springframework.stereotype.Component
import org.springframework.data.mongodb.core.MongoOperations

import com.jobtrackie.jobapplications.repository.ApplicationRepository
import graphql.kickstart.tools.GraphQLQueryResolver
import com.jobtrackie.jobapplications.model.Application
import org.springframework.beans.factory.annotation.Autowired

@Component
class ApplicationQueryResolver(
		@Autowired private val applicationRepository: ApplicationRepository,
		private val mongoOperations: MongoOperations
) : GraphQLQueryResolver {
	
	fun applications(): List<Application> {
		return applicationRepository.findAll()
	}
}

								