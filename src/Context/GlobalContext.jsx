// src/Context/GlobalContext.js
import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Initialize courses from localStorage or default data
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : [
      {
        id: 1,
        title: 'Math 101',
        description: 'Basic Mathematics',
        teacherId: 1,
        students: [1, 2],
      },
      {
        id: 2,
        title: 'Science 101',
        description: 'Basic Science',
        teacherId: 2,
        students: [2, 3],
      }
    ];
  });

  // Initialize students from localStorage or default data
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Tom Brown' },
    ];
  });

  // Initialize grades from localStorage or default data
  const [grades, setGrades] = useState(() => {
    const savedGrades = localStorage.getItem('grades');
    return savedGrades ? JSON.parse(savedGrades) : [
      { studentId: 1, courseId: 1, grade: 'A' },
      { studentId: 2, courseId: 1, grade: 'B' },
      { studentId: 2, courseId: 2, grade: 'A' },
    ];
  });

  // Save courses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  // Save students to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  // Save grades to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('grades', JSON.stringify(grades));
  }, [grades]);

  // Add a new course
  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  // Remove a course
  const removeCourse = (id) => {
    setCourses((prevCourses) => prevCourses.filter(course => course.id !== id));
  };

  // Add or update a grade
  const updateGrade = (studentId, courseId, newGrade) => {
    setGrades((prevGrades) => {
      const existingGradeIndex = prevGrades.findIndex(
        (grade) => grade.studentId === studentId && grade.courseId === courseId
      );

      if (existingGradeIndex !== -1) {
        // Update existing grade
        const updatedGrades = [...prevGrades];
        updatedGrades[existingGradeIndex].grade = newGrade;
        return updatedGrades;
      } else {
        // Add new grade
        return [...prevGrades, { studentId, courseId, grade: newGrade }];
      }
    });
  };

  // Add a new student
  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <GlobalContext.Provider
      value={{
        courses,
        students,
        grades,
        addCourse,
        removeCourse,
        updateGrade,
        addStudent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
