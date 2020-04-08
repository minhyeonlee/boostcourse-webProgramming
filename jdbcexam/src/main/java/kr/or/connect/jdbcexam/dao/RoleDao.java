package kr.or.connect.jdbcexam.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import kr.or.connect.jdbcexam.dto.Role;

public class RoleDao {
	//DB 연결은 계속 일어남(재사용)
	private static String dburl = "jdbc:mysql://localhost:3306/connectdb?serverTimezone=Asia/Seoul&useSSL=false";
	private static String dbUser = "connectuser";
	private static String dbpasswd = "connect123!@#";
	
	//1. 한 건의 데이터를 가져오는 메서드
	public Role getRole(Integer roleId) {
		Role role = null;
		Connection conn = null; //연결 객체 
		PreparedStatement ps = null; //명령 선언 객체 
		ResultSet rs = null; //결과 값을 담아내는 객체 

		try {
			//Driver Loading
			Class.forName("com.mysql.jdbc.Driver");
			//Connection 객체 얻어오기 
			conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
			
			//Statement 객체 얻어오기 
			String sql = "SELECT description, role_id FROM role WHERE role_id = ?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, roleId);
			
			//실행 
			rs = ps.executeQuery();
			
			//값을 꺼낼 때 sql에서 select한 순서대로 꺼내야한다.
			if(rs.next()) {
				String description = rs.getString(1);
				int id = rs.getInt("role_id");
				role = new Role(id, description);
			}
			
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			//객체 닫기 
			if(rs != null) {
				try {
					rs.close();
				} catch(SQLException e) {
					e.printStackTrace();
				}
			}
			if(ps != null) {
				try {
					ps.close();
				} catch(SQLException e) {
					e.printStackTrace();
				}
			}
			if(conn != null) {
				try {
					conn.close();
				} catch(SQLException e) {
					e.printStackTrace();
				}
			}
			
		}
		
		return role;
	}
	
	//2. 값을 입력 받는 메서드 추가
	public int addRole(Role role) {
		int insertCount = 0;

		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		String sql = "INSERT INTO role (role_id, description) VALUES(?,?)";
		
		try(Connection conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
			PreparedStatement ps = conn.prepareStatement(sql)){
			
			//?값을 바인딩: select한 순서대로 
			ps.setInt(1, role.getRoleId());
			ps.setString(2, role.getDescription());
			
			insertCount = ps.executeUpdate();
			
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return insertCount;
	}
	
	//3. 모든 데이터를 가져오는 메서드 추가
	public List<Role> getRoles(){
		List<Role> list = new ArrayList<>();
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
		}catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		String sql = "SELECT description, role_id FROM role order by role_id desc";
		// 객체가 알아서 close됨 
		try (Connection conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
			PreparedStatement ps = conn.prepareStatement(sql)){
			
			try(ResultSet rs = ps.executeQuery()){
				
				while(rs.next()) {
					String description = rs.getString(1);
					int id = rs.getInt("role_id");
					Role role = new Role(id, description);
					list.add(role); //list에 반복할 때 마다 Role 인스턴스를 생성하여 list에 추가한다.
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	//4. Delete 메서드 추가 
	public int deleteRole(Integer roleId) {
		int deleteCount = 0;
		
		Connection conn = null;
		PreparedStatement ps = null;
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
			
			String sql = "DELETE FROM role WHERE role_id=?";
			
			ps = conn.prepareStatement(sql);
			
			ps.setInt(1, roleId);
			
			deleteCount = ps.executeUpdate();
		}catch(Exception ex) {
			ex.printStackTrace();
		}finally {
			if(ps != null) {
				try {
					ps.close();
				}catch(Exception ex) {}
			} // if
			
			if(conn != null) {
				try {
					conn.close();
				}catch(Exception ex) {}
			} // if
			
		} // finally
		return deleteCount;
	}
	
	//5. Update 메서드 추
	public int updateRole(Role role) {
		int updateCount = 0;
		
		
		try{
			Class.forName("com.mysql.jdbc.Driver");
		}catch(ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		String sql = "UPDATE role SET description = ? where role_id = ?";
		try(Connection conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
			PreparedStatement ps = conn.prepareStatement(sql)){
				
				ps.setString(1, role.getDescription());
				ps.setInt(2, role.getRoleId());

				updateCount = ps.executeUpdate();
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return updateCount;
	}
}

