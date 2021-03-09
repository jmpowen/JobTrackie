package com.jobtrackie.jobapplications.repository

import com.jobtrackie.jobapplications.model.Application
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface ApplicationRepository : MongoRepository<Application, String> {
}