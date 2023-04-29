export const createCourseSlice = (set) => ({
    lessons: [],
    isLoaded: false,
    loadLessons: async () => {
        const res = await fetch('/api/get-course')

        const lessons = await res.json()
        
        set(() => ({lessons: [...lessons], isLoaded: true}))
    }
})