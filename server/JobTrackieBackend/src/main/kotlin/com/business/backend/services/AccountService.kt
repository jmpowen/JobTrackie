package com.business.backend.services

import com.business.backend.repositories.AccountRepository
import org.springframework.stereotype.Service

@Service
class AccountService(private val accountRepository: AccountRepository){

}