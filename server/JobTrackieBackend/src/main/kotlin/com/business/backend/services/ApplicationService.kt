package com.business.backend.services

import org.springframework.stereotype.Service
import com.business.backend.repositories.ApplicationRepository

@Service
class ApplicationService(private val applicationRepository: ApplicationRepository){

}