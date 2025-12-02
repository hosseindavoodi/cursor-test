import { Controller, Post, Body, UseGuards, Request, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { Public } from "./decorators/public.decorator";
import { AuthenticatedUser, CurrentUser } from "../common/decorators/current-user.decorator";
import { LoginDto, ChangePasswordDto, ForgotPasswordDto, ResetPasswordDto, VerifyDto } from "./dto/auth.dto";
import { User } from "../users/interfaces/user.interface";
import { ApiTags, ApiOperation, ApiBody, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  // @UseGuards(LocalAuthGuard)
  @Post("login")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "User login" })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: "User logged in successfully" })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Public()
  @Post("verify")
  @ApiOperation({ summary: "Verify OTP code" })
  @ApiBody({ type: VerifyDto })
  @ApiResponse({ status: 200, description: "OTP verified successfully" })
  async verify(@Body() verifyDto: VerifyDto) {
    return this.authService.verifyOtp(verifyDto);
  }

  @Public()
  @Post("refresh")
  @ApiOperation({ summary: "Refresh access token" })
  // @ApiBody({ schema: { example: { refresh_token: 'your-refresh-token' } } })
  // @ApiResponse({ status: 200, description: 'New access token issued' })
  async refreshToken(@Body() body: { refresh_token: string }) {
    return this.authService.refreshToken(body.refresh_token);
  }

  @Public()
  @Post("forgot-password")
  @ApiOperation({ summary: "Initiate forgot password flow" })
  // @ApiBody({ type: ForgotPasswordDto })
  // @ApiResponse({ status: 200, description: 'Password reset email sent' })
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Public()
  @Post("reset-password")
  @ApiOperation({ summary: "Reset password with token" })
  @ApiBody({ type: ResetPasswordDto })
  // @ApiResponse({ status: 200, description: 'Password reset successfully' })
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post("change-password")
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "Change password" })
  @ApiBody({ type: ChangePasswordDto })
  @ApiResponse({ status: 200, description: "Password changed successfully" })
  async changePassword(@CurrentUser() user: User, @Body() changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(user.id, changePasswordDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post("logout")
  @ApiBearerAuth("access-token")
  @ApiOperation({ summary: "Logout user" })
  // @ApiResponse({ status: 200, description: 'User logged out succ essfully' })
  async logout(@AuthenticatedUser() user: User, @Request() req): Promise<{ message: string }> {
    const token = req.headers.authorization?.replace("Bearer ", "");
    return this.authService.logout(user.id, token);
  }

  // Deprecated 
  // @UseGuards(JwtAuthGuard)
  // @Get("profile")
  // @ApiBearerAuth("access-token")
  // @ApiOperation({ summary: "Get user profile" })
  // // @ApiResponse({ status: 200, description: 'Returns user profile' })
  // getProfile(@CurrentUser() user: User) {
  //   return {
  //     user,
  //     message: "Profile retrieved successfully",
  //   };
  // }

  // Deprecated Controller
  // @UseGuards(JwtAuthGuard)
  // @Get("me")
  // @ApiBearerAuth("access-token")
  // @ApiOperation({ summary: "Get current user" })
  // @ApiResponse({ status: 200, description: "Returns current user data" })
  // getCurrentUser(@CurrentUser() user: User) {
  //   return user;
  // }
}
