package com.jobtrackie.jobapplications

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication//(exclude = {MongoAutoConfiguration.class} )
class JobApplicationsApplication

fun main(args: Array<String>) {
	runApplication<JobApplicationsApplication>(*args)
}



