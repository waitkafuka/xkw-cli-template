export default {
  namespaced: true,
  state: {
    userCourseSelected: {
      id: 56,
      sort: 1,
      stageId: 3,
      subjectId: 9,
      courseId: 18,
      courseName: "初中地理",
      courseShow: "初中·地理",
    },
  },
  mutations: {
    setUserCourse(state, userCourseSelected) {
      state.userCourseSelected = userCourseSelected;
    },
  },
};
