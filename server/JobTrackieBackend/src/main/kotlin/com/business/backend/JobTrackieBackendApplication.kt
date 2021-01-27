package com.business.backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class JobTrackieBackendApplication

fun main(args: Array<String>) {
	runApplication<JobTrackieBackendApplication>(*args)
}
