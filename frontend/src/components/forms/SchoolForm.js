const SchoolForm = ({ onSave, disabled, school, onCancel }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        const school = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});

        return onSave(school);
    };

    return (
        <form className="SchoolForm" onSubmit={onSubmit}>
            {school && (
                <input type="hidden" name="_id" defaultValue={school.id} />
            )}

            <div className="control">
                <label htmlFor="name">School Name:</label>
                <input
                    defaultValue={school ? school.name : null}
                    name="name"
                    id="name"
                />
            </div>

            <div className="control">
                <label htmlFor="address">Address:</label>
                <input
                    defaultValue={school ? school.address : null}
                    name="address"
                    id="address"
                />
            </div>

            <div className="control">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    defaultValue={school ? school.phoneNumber : null}
                    name="phoneNumber"
                    id="phoneNumber"
                />
            </div>
            <div className="control">
                <label htmlFor="email">Email :</label>
                <input
                    defaultValue={school ? school.email : null}
                    name="email"
                    id="email"
                />
            </div>

            <div className="buttons">
                <button type="submit" disabled={disabled}>
                    {school ? "Update School" : "Create School"}
                </button>

                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default SchoolForm;
