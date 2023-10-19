import React from 'react';

const SchoolForm = ({onSave, disabled, school, onCancel}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        const schoolData = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});

        return onSave(schoolData);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {school ? "Edit School" : "Create School"}
                </h5>
                <form className="SchoolForm" onSubmit={onSubmit}>
                    {school && <input type="hidden" name="_id" defaultValue={school.id}/>}

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">
                                School Name:
                            </label>
                            <input
                                defaultValue={school ? school.name : null}
                                name="name"
                                id="name"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="address" className="form-label">
                                Address:
                            </label>
                            <input
                                defaultValue={school ? school.address : null}
                                name="address"
                                id="address"
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label">
                                Phone Number:
                            </label>
                            <input
                                defaultValue={school ? school.phoneNumber : null}
                                name="phoneNumber"
                                id="phoneNumber"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">
                                Email:
                            </label>
                            <input
                                defaultValue={school ? school.email : null}
                                name="email"
                                id="email"
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button type="submit" disabled={disabled} className="btn btn-primary">
                            {school ? "Update School" : "Create School"}
                        </button>
                        <button type="button" onClick={onCancel} className="btn btn-secondary">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SchoolForm;
