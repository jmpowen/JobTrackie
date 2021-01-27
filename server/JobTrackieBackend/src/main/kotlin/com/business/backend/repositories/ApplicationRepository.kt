package com.business.backend.repositories

import org.springframework.data.repository.PagingAndSortingRepository
import com.business.backend.models.Application

interface ApplicationRepository : PagingAndSortingRepository<Application, Integer> {

}