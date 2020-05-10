package kr.or.connect.daoexam.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import kr.or.connect.daoexam.config.ApplicationConfig;
import kr.or.connect.daoexam.dao.RoleDao;
import kr.or.connect.daoexam.dto.Role;

public class JDBCTest {

	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);

		RoleDao roleDao = ac.getBean(RoleDao.class);

		// insert test
		Role role = new Role();
		role.setRoleId(555);
		role.setDescription("CEO");

		int count = roleDao.insert(role);
		System.out.println(count + "건 입력하였습니다.");

		// update test
		Role role2 = new Role();
		role2.setRoleId(555);
		role2.setDescription("PROGRAMMER");

		int count2 = roleDao.update(role2);
		System.out.println(count2 + "건 수정하였습니다.");
		
		// select by id test
		Role resultRole = roleDao.selectById(555);
		System.out.println(resultRole);
		
		// delete by id test
		int count3 = roleDao.deleteById(555);
		System.out.println(count3 + "건 삭제하였습니다.");

	}

}
