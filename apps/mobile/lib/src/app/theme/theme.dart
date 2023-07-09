import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  static const Color kGreenColor = Color(0xFF77DB8F);
  static const Color kTealAccentColor = Color(0xFF339798);
  static const Color kRedColor = Color(0xFFFFE3E3);

  static ThemeData theme = ThemeData(
    useMaterial3: true,
    textTheme: TextTheme(
      bodyLarge: GoogleFonts.inter(
        fontSize: 24.sp,
        fontWeight: FontWeight.w600,
        color: Colors.white,
      ),
      bodyMedium: GoogleFonts.inter(
        fontSize: 20.sp,
        fontWeight: FontWeight.w600,
        color: Colors.white,
      ),
      bodySmall: GoogleFonts.inter(
        fontSize: 17.sp,
        fontWeight: FontWeight.w600,
        color: Colors.white,
      ),
      labelLarge: GoogleFonts.inter(
        fontSize: 24.sp,
        fontWeight: FontWeight.w600,
        color: Colors.black,
      ),
      labelMedium: GoogleFonts.inter(
        fontSize: 20.sp,
        fontWeight: FontWeight.w600,
        color: Colors.black,
      ),
      labelSmall: GoogleFonts.inter(
        fontSize: 17.sp,
        fontWeight: FontWeight.w300,
        color: Colors.black,
      ),
      displayLarge: GoogleFonts.inter(
        fontSize: 24.sp,
        fontWeight: FontWeight.w300,
        color: Colors.black,
      ),
      displayMedium: GoogleFonts.inter(
        fontSize: 15.sp,
        fontWeight: FontWeight.w300,
        color: Colors.black,
      ),
      displaySmall: GoogleFonts.inter(
        fontSize: 13.sp,
        fontWeight: FontWeight.w300,
        color: Colors.black,
      ),
    ),
  );
}
