import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test1
{
	private ApplicationContext ac;
	@Before
	public void init(){
		ac=new ClassPathXmlApplicationContext("conf/spring-mybatis.xml");
	}
	@Test
	public void testDate() throws ParseException{
		String[] week={"星期日","星期一","星期二","星期三","星期四","星期五","星期六"};
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd");
		Date d=sdf.parse("2018/8/25");
		Calendar cale=Calendar.getInstance();
		cale.setTime(d);
		int n=cale.get(Calendar.DAY_OF_WEEK)-1;
		System.out.println(week[n]);
		System.out.println(Time.valueOf("12:00:00").before(Time.valueOf("13:00:00")));
	}
}
