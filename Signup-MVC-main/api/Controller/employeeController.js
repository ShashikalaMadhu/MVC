const EmployeeModel = require('../Model/Employee');
const CustomerModel = require('../Model/Customer');

exports.registerEmployee = async (req, res) => {
    try {
        const employee = await EmployeeModel.create(req.body);
        res.json(employee);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.loginEmployee = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await  EmployeeModel.findOne({ email: email })
        .then(employee => {
            if (employee) {
                if (employee.password === password) {
                    res.json({ role: "employee", message: "Success" });
                } else {
                    res.json({ role: "employee", message: "The password is incorrect" });
                }
            } else {
                // Check if the user is a customer
                CustomerModel.findOne({ email: email })
                    .then(customer => {
                        if (customer) {
                            if (customer.password === password) {
                                res.json({ role: "customer", message: "Success" });
                            } else {
                                res.json({ role: "customer", message: "The password is incorrect" });
                            }
                        } else {
                            res.json("No record existed");
                        }
                    })
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));
    } catch (err) {
        res.status(400).json(err);
    }
};
