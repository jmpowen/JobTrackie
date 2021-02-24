package com.jobtrackie.jobapplications.resolvers

import com.jobtrackie.jobapplications.repository.ApplicationRepository

import com.ninjasquad.springmockk.MockkBean
import io.mockk.every
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class ApplicationMutationResolverTest {

	@MockkBean
	private lateinit var applicationRepository: ApplicationRepository

	@MockkBean
    private lateinit var applicationMutationResolver : ApplicationMutationResolver

	@Test
	fun `should create a new application`(){
		
	}
	
	@Test
	fun `should delete an application by its accountID`() {
		//every { applicationRepository.deleteById(any()) } returns true

        //applicationMutationResolver.deleteApplication("12345")


	}
	
	@Test
	fun `should update an application given an ID and a status`(){
		
	}
	
}