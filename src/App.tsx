import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./ui";
import DisplayPage from "./pages/settings/DisplayPage";
import { useAppLogic } from "./logic";
import { MainLayout } from "./layout";
import {
  BookmarksPage,
  FollowersPage,
  FollowingPage,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  PeopleYouMayKnowPage,
  ProfilePage,
  ResetPasswordPage,
  SearchPage,
  SignupPage,
  VerifyAccountPage,
  SettingsPage,
  UpdatePasswordPage,
  DeactivatePage,
  NotFoundPage,
} from "./pages";

const App = () => {
  useAppLogic();

  return (
    <div>
      <Routes>
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password/:token" element={<ResetPasswordPage />} />
        </Route>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path=":username">
            <Route index element={<ProfilePage />} />
            <Route path="followers" element={<FollowersPage />} />
            <Route path="following" element={<FollowingPage />} />
          </Route>
          <Route path="bookmarks" element={<BookmarksPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="settings">
            <Route index element={<SettingsPage />} />
            <Route path="password" element={<UpdatePasswordPage />} />
            <Route path="deactivate" element={<DeactivatePage />} />
            <Route path="display" element={<DisplayPage />} />
          </Route>
          <Route
            path="people-you-may-know"
            element={<PeopleYouMayKnowPage />}
          />
        </Route>

        <Route
          path="verify-account/:token"
          element={
            <ProtectedRoute>
              <VerifyAccountPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
          className:
            "bg-light-paper dark:bg-dark-paper text-light-title dark:text-dark-title",
        }}
      />
    </div>
  );
};

export default App;
