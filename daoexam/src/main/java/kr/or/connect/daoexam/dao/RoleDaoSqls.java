package kr.or.connect.daoexam.dao;

public class RoleDaoSqls {
	// 상수는 모두 대문자로 쓰는게 관례(_로 구분)
	// :값 -> 추후에 값으로 바인딩 됨
	public static final String SELECT_ALL = "SELECT role_id, description FROM role order by role_id";
	public static final String UPDATE = "UPDATE role set description = :description where role_id = :roleId";
	public static final String SELECT_BY_ROLE_ID = "SELECT role_id, description FROM role where role_id = :roleId";
	public static final String DELETE_BY_ROLE_ID = "DELETE FROM role WHERE role_id = :roleId";
}
