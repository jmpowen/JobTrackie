package com.jobtrackie.jobapplications.repository

import org.springframework.stereotype.Repository
import org.springframework.data.mongodb.repository.MongoRepository

import com.jobtrackie.jobapplications.model.Application

@Repository
interface ApplicationRepository : MongoRepository<Application, String> {

    fun findByCompany(company: String): List<Application>
}