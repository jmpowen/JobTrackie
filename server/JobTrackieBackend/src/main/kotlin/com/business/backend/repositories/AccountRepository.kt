package com.business.backend.repositories

import org.springframework.data.repository.PagingAndSortingRepository
import com.business.backend.entities.Account

interface UserRepository : PagingAndSortingRepository<Account, Integer> {
	
}