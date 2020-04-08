package kr.or.connect.jdbcexam;

import kr.or.connect.jdbcexam.dao.RoleDao;

public class JDBCExam4 {
	public static void main(String[] args) {
		//Delete Test
		
		int roleId = 501;
		
		RoleDao dao = new RoleDao();
		int deleteCount = dao.deleteRole(roleId);
		
		System.out.println(deleteCount);
	}
}
