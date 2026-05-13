import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GoalSelectionPage from "./components/GoalSelectionPage";
import HabitPlanner from "./components/HabitPlanner";
import ProgressHistory from "./components/ProgressHistory";

function App() {
  const [currentPage, setCurrentPage] = useState<"welcome" | "goal" | "planner" | "progress">("welcome");
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const handleLoginSuccess = () => {
    setCurrentPage("goal");
  };

  const handleSignUpSuccess = () => {
    setCurrentPage("goal");
  };

  const handleLogout = () => {
    setCurrentPage("welcome");
  };

  const handleGoalSelected = (goal: string) => {
    setSelectedGoal(goal);
    setCurrentPage("planner");
  };

  const handleBackToGoals = () => {
    setCurrentPage("goal");
  };

  const handleViewProgress = () => {
    setCurrentPage("progress");
  };

  const handleBackFromProgress = () => {
    setCurrentPage("goal");
  };

  const handleBackToDashboard = () => {
    setCurrentPage("goal");
  };

  // Show Goal Selection Page (after login)
  if (currentPage === "goal") {
    return (
      <GoalSelectionPage 
        onSelectGoal={handleGoalSelected} 
        onViewProgress={handleViewProgress}
        onLogout={handleLogout}
      />
    );
  }

  // Show Habit Planner Page
  if (currentPage === "planner") {
    return (
      <HabitPlanner 
        goal={selectedGoal} 
        onBack={handleBackToGoals} 
        onViewProgress={handleViewProgress}
        onLogout={handleLogout}
        onBackToDashboard={handleBackToDashboard}
      />
    );
  }

  // Show Progress History Page
  if (currentPage === "progress") {
    return (
      <ProgressHistory 
        onBack={handleBackFromProgress}
        onLogout={handleLogout}
      />
    );
  }

  // Show Welcome Page (default / not logged in)
  return (
    <WelcomePage 
      onLoginSuccess={handleLoginSuccess}
      onSignUpSuccess={handleSignUpSuccess}
    />
  );
}

export default App;