const StudentForm =({ onSave, students})=>{
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        const students = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});

        return onSave(students);
    };

    return(
        <form className="StudentForm" onSubmit={onSubmit}>
            {}
        </form>
    )
}