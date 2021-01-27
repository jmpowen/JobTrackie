package com.business.backend.repositories

import org.springframework.data.repository.PagingAndSortingRepository
import com.business.backend.models.Account

interface AccountRepository : PagingAndSortingRepository<Account, Integer> {

}