package ir.piana.business.prediction.common.util;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class DateUtil {
    private static int[] g_days_in_month = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    public static int[] j_days_in_month = {31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29};
    public static SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm");
    public static SimpleDateFormat timeFormatSecond = new SimpleDateFormat("HH:mm:ss");
    public static SimpleDateFormat timeFormatDetail = new SimpleDateFormat("HH:mm:ss:SSS");
    public static SimpleDateFormat dateFormatDetail = new SimpleDateFormat("yyyy/MM/dd");
    public static SimpleDateFormat dateTimeFormatFull = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    private static String[] days = {
            "یکشنبه",
            "دوشنبه",
            "سه شنبه",
            "چهارشنبه",
            "پنج شنبه",
            "جمعه",
            "شنبه",
    };
    static Map baseStrings = new HashMap();
    static {
        baseStrings.put(new Long(0), "صفر");
        baseStrings.put(new Long(1), "يک");
        baseStrings.put(new Long(2), "دو");
        baseStrings.put(new Long(3), "سه");
        baseStrings.put(new Long(4), "چهار");
        baseStrings.put(new Long(5), "پنج");
        baseStrings.put(new Long(6), "شش");
        baseStrings.put(new Long(7), "هفت");
        baseStrings.put(new Long(8), "هشت");
        baseStrings.put(new Long(9), "نه");
        baseStrings.put(new Long(10), "ده");
        baseStrings.put(new Long(11), "يازده");
        baseStrings.put(new Long(12), "دوازده");
        baseStrings.put(new Long(13), "سيزده");
        baseStrings.put(new Long(14), "چهارده");
        baseStrings.put(new Long(15), "پانزده");
        baseStrings.put(new Long(16), "شانزده");
        baseStrings.put(new Long(17), "هفده");
        baseStrings.put(new Long(18), "هيجده");
        baseStrings.put(new Long(19), "نوزده");
        baseStrings.put(new Long(20), "بيست");
        baseStrings.put(new Long(30), "سي");
        baseStrings.put(new Long(40), "چهل");
        baseStrings.put(new Long(50), "پنجاه");
        baseStrings.put(new Long(60), "شصت");
        baseStrings.put(new Long(70), "هفتاد");
        baseStrings.put(new Long(80), "هشتاد");
        baseStrings.put(new Long(90), "نود");
        baseStrings.put(new Long(100), "یکصد");
        baseStrings.put(new Long(200), "دويست");
        baseStrings.put(new Long(300), "سيصد");
        baseStrings.put(new Long(400), "چهارصد");
        baseStrings.put(new Long(500), "پانصد");
        baseStrings.put(new Long(600), "ششصد");
        baseStrings.put(new Long(700), "هفتصد");
        baseStrings.put(new Long(800), "هشتصد");
        baseStrings.put(new Long(900), "نهصد");
        baseStrings.put(new Long(1000), "هزار");
        baseStrings.put(new Long(1000000), "ميليون");
        baseStrings.put(new Long(1000000000), "ميليارد");
        baseStrings.put(new Long(1000000000000L), " بیلیون ");
        baseStrings.put(new Long(1000000000000000L), "ميليون ميليارد");
        baseStrings.put(new Long(1000000000000000000L), "ميليارد ميليارد");
    }

    public static String getGregorianDate(String jalaiDate) {
        ///
        int j_y = Integer.parseInt(jalaiDate.substring(0, 4));
        int j_m = Integer.parseInt(jalaiDate.substring(5, 7));
        int j_d = Integer.parseInt(jalaiDate.substring(8));
        ///
        int gy, gm, gd;
        int jy, jm, jd;
        long g_day_no, j_day_no;
        int leap;

        int i;

        jy = j_y - 979;
        jm = j_m - 1;
        jd = j_d - 1;

        j_day_no = 365 * jy + (jy / 33) * 8 + (jy % 33 + 3) / 4;
        for (i = 0; i < jm; ++i)
            j_day_no += j_days_in_month[i];

        j_day_no += jd;

        g_day_no = j_day_no + 79;

        gy = (int) (1600 + 400 * (g_day_no / 146097)); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
        g_day_no = g_day_no % 146097;

        leap = 1;
        if (g_day_no >= 36525) /* 36525 = 365*100 + 100/4 */ {
            g_day_no--;
            gy += 100 * (g_day_no / 36524); /* 36524 = 365*100 + 100/4 - 100/100 */
            g_day_no = g_day_no % 36524;

            if (g_day_no >= 365)
                g_day_no++;
            else
                leap = 0;
        }

        gy += 4 * (g_day_no / 1461); /* 1461 = 365*4 + 4/4 */
        g_day_no %= 1461;

        if (g_day_no >= 366) {
            leap = 0;

            g_day_no--;
            gy += g_day_no / 365;
            g_day_no = g_day_no % 365;
        }

        for (i = 0; g_day_no >= g_days_in_month[i] + ((i == 1 && leap == 1) ? 1 : 0); i++)
            g_day_no -= g_days_in_month[i] + ((i == 1 && leap == 1) ? 1 : 0);
        gm = i + 1;
        gd = (int) g_day_no + 1;

//        return gy + "-" + gm + "-" + gd;
        return gy + "-" + (gm < 10 ? "0" + gm : "" + gm) + "-" + (gd < 10 ? "0" + gd : "" + gd);
    }

    public static Date getGregorianDateAsDate(String jalaiDate) {
        return Date.valueOf(getGregorianDate(jalaiDate));
    }

    public static String getJalaliDate(String gregorianDate) {
        ///
        int g_y = Integer.parseInt(gregorianDate.substring(0, 4));
        int g_m = Integer.parseInt(gregorianDate.substring(5, 7));
        int g_d = Integer.parseInt(gregorianDate.substring(8));
        ///
        int gy, gm, gd;
        int jy, jm, jd;
        long g_day_no, j_day_no;
        int j_np;

        int i;
        gy = g_y - 1600;
        gm = g_m - 1;
        gd = g_d - 1;

        g_day_no = 365 * gy + (gy + 3) / 4 - (gy + 99) / 100 + (gy + 399) / 400;
        for (i = 0; i < gm; ++i)
            g_day_no += g_days_in_month[i];
        if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)))
            /* leap and after Feb */
            ++g_day_no;
        g_day_no += gd;

        j_day_no = g_day_no - 79;

        j_np = (int) j_day_no / 12053;

        j_day_no %= 12053;

        jy = (int) (979 + 33 * j_np + 4 * (j_day_no / 1461));
        j_day_no %= 1461;

        if (j_day_no >= 366) {
            jy += (j_day_no - 1) / 365;
            j_day_no = (j_day_no - 1) % 365;
        }

        for (i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) {
            j_day_no -= j_days_in_month[i];
        }
        jm = i + 1;
        jd = (int) j_day_no + 1;

        return jy + "/" + (jm < 10 ? "0" + jm : "" + jm) + "/" + (jd < 10 ? "0" + jd : "" + jd);
    }

    public static boolean isValidJalaliDate(String jalaiDate) {
        boolean valid = true;
        try {
            valid &= (jalaiDate.length() == 10);
            valid &= (jalaiDate.charAt(4) == '/');
            valid &= (jalaiDate.charAt(7) == '/');

            int j_y = Integer.parseInt(jalaiDate.substring(0, 4));
            int j_m = Integer.parseInt(jalaiDate.substring(5, 7));
            int j_d = Integer.parseInt(jalaiDate.substring(8));

            valid &= (j_y > 1200 && j_y < 1500);
            valid &= (j_m >= 1 && j_m <= 12);
            valid &= ((j_m >= 1 && j_m <= 6) && (j_d >= 1 && j_d <= 31)) || ((j_m >= 7) && (j_d >= 1 && j_d <= 30));
        } catch (Exception e) {
            valid = false;
        }
        return valid;
    }

    public static String getTodayJalali() {
        Date date = new Date(System.currentTimeMillis());
        String gregorianDate = date.toString();
        return getJalaliDate(gregorianDate);
    }

    public static String addDaysToJalaliDate(String jalaliDate, int days) {
        String gDate = getGregorianDate(jalaliDate);
        Date d = Date.valueOf(gDate);
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(d);
        calendar.add(Calendar.DAY_OF_YEAR,days);
        gDate = new Date(calendar.getTimeInMillis()).toString();
        String jDate = getJalaliDate(gDate);
        return jDate;
    }

    public static String addMonthsToJalaliDate(String jalaliDate, int addedMonth) {
        if (addedMonth == 0) {
            return jalaliDate;
        } else if (addedMonth < 0) {
            throw new RuntimeException("Not support reverse mode yet");
        }
        StringTokenizer gDate = new StringTokenizer(jalaliDate, "/");
        int year = Integer.parseInt(gDate.nextToken());
        int month = Integer.parseInt(gDate.nextToken());
        String day = gDate.nextToken();

        month += addedMonth;
        int mod = month % 12;
        int addedYear = month / 12;
        if (mod == 0) {
            if (addedYear > 1) {
                year += addedYear - 1;
                month = 12;
            }
        } else {
            year += addedYear;
            month = mod;
        }
        String monthStr = month < 10 ? "0" + month : month + "";
        return year + "/" + monthStr + "/" + day;
    }

    public static String addYearsToJalaliDate(String jalaliDate, int addedYear) {
        StringTokenizer gDate = new StringTokenizer(jalaliDate, "/");
        int year = Integer.parseInt(gDate.nextToken());
        String month = gDate.nextToken();
        String day = gDate.nextToken();

        return (year + addedYear) + "/" + month + "/" + day;
    }

    public static int getDayOfWeekIndexJalali(String jDate) {
        String gDate = getGregorianDate(jDate);
        Date d = Date.valueOf(gDate);
        Calendar c = Calendar.getInstance();
        c.setTime(d);
        int i = c.get(Calendar.DAY_OF_WEEK);
        return i - 1;
    }

    public static String getDayOfWeekJalali(String jDate) {
        return days[getDayOfWeekIndexJalali(jDate)];
    }

    public static String reverseDate(String date) {
        try {
            StringTokenizer st = new StringTokenizer(date, "/");
            String part1 = st.nextToken();
            String part2 = st.nextToken();
            String part3 = st.nextToken();
            return part3 + "/" + part2 + "/" + part1;
        } catch (Exception e) {
            return date;
        }
    }

    public static StringBuffer getAsString(long n) {
        if (n >= 1000) {
            String s = (String) baseStrings.get(new Long(n));
            if (s != null) {
                StringBuffer sb = new StringBuffer();
                sb.append("یک ");
                sb.append(s);
                return sb;
            }
        }
        return getAsStringInternal(n);
    }

    public static long getX(long x) {
        long c = 0;
        while((x = x / 1000) > 0)
            c++;
        c = (long) Math.pow(1000, c);
        return c;
    }

    private static StringBuffer getAsStringInternal(long n) {
        StringBuffer sb = new StringBuffer();
        String s = (String) baseStrings.get(new Long(n));
        if (s != null) {
            sb.append(s);
            return sb;
        }
        if (n < 0) {
            sb.append("-");
            return sb.append(getAsStringInternal(-n));
        } else if (n < 1000) {
            long n3 = (n < 100) ? 10 : 100;
            long n1 = n % n3;
            long n2 = n - n1;
            sb.append(getAsStringInternal(n2));
            if (n1 > 0) {
                sb.append(" و ").append(getAsStringInternal(n1));
            }
        } else {
            long n3 = getX(n);
            long n1 = n % n3;
            long n2 = n / n3;
            sb.append(getAsStringInternal(n2)).append(' ').append(getAsStringInternal(n3));
            if (n1 > 0) {
                sb.append(" و ").append(getAsStringInternal(n1));
            }
        }
        return sb;
    }

    public static String getDateToString(String date, int... toChange) {
        if (toChange.length == 0)
            toChange = new int[]{Calendar.YEAR, Calendar.MONTH, Calendar.DAY_OF_MONTH};
        boolean day = false, month = false, year = false;
        for (int i : toChange) {
            if (i == Calendar.YEAR) year = true;
            else if (i == Calendar.MONTH) month = true;
            else if (i == Calendar.DAY_OF_MONTH) day = true;
        }
        StringTokenizer st = new StringTokenizer(reverseDate(date), "/");
        int i = 0;
        String dateToString = "";
        String monthString[] = {"فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند"};
        while (st.hasMoreTokens()) {
            i++;
            String tocken = st.nextToken();
            switch (i) {
                case 1:
                    dateToString += " " + (day ? getAsString(Long.parseLong(tocken)).toString() : tocken);
                    break;
                case 2:
                    int tok = Integer.parseInt(tocken);
                    String thisMonth = monthString[tok - 1];
                    dateToString += " " + (month ? thisMonth : tocken);
                    break;
                case 3:
                    dateToString += " " + (year ? getAsString(Long.parseLong(tocken)).toString() : tocken);
                    break;
            }
        }
        return dateToString;
    }

    public static String getTime() {
        return timeFormat.format(new java.util.Date());
    }

    public static String getTimeSecond() {
        return timeFormatSecond.format(new java.util.Date());
    }

    public static String getTimeDetail() {
        java.util.Date date = new java.util.Date();
        return timeFormatDetail.format(date);
    }

    public static Long getTimeDiff(String time1, String time2) {
        long timeint1 = Integer.valueOf(time1.substring(0, 2)) * 60 + Integer.valueOf(time1.substring(3, 3 + 2)) * 60 + Integer.valueOf(time1.substring(3 + 3, 3 + 3 + 2));
        long timeint2 = Integer.valueOf(time2.substring(0, 2)) * 60 + Integer.valueOf(time2.substring(3, 3 + 2)) * 60 + Integer.valueOf(time2.substring(3 + 3, 3 + 3 + 2));
        return Math.abs(timeint1 - timeint2);
    }

    public static boolean isValidTime(String time) {
        boolean valid = true;
        try {
            valid &= (time.length() == 5);
            valid &= (time.charAt(2) == ':');

            int hh = Integer.parseInt(time.substring(0, 2));
            int mm = Integer.parseInt(time.substring(3));

            valid &= (hh >= 0 && hh < 24);
            valid &= (mm >= 0 && mm < 60);
        } catch (Exception e) {
            valid = false;
        }
        return valid;
    }
}
