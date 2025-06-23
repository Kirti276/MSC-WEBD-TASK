import React from "react";
import SummaryCard from "../components/SummaryCard";
import { useAuth } from "../context/AuthContext";
import { FaGraduationCap, FaCalendarCheck, FaBook } from 'react-icons/fa';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Welcome Back, {user.name.split(' ')[0]}!</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">Here's a summary of your academic progress.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard title="GPA" value="9.14" icon={<FaGraduationCap />} color="blue" />
        <SummaryCard title="Attendance" value="92%" icon={<FaCalendarCheck />} color="green" />
        <SummaryCard title="Subjects" value="12/15" icon={<FaBook />} color="purple" />
      </div>
    </div>
  );
}