const { createEmployee,
    getAllEmployees,
    getEmployeeById,
    deleteEmployeeById,
    updateEmployeeById
} = require('../controllers/EmployeeController');
const FileUploader = require('../middleware/Multer');


const router = require('express').Router();

router.get('/', getAllEmployees)
router.get('/:id', getEmployeeById)
router.delete('/:id', deleteEmployeeById)
router.put('/:id', FileUploader.single('profileImage'), updateEmployeeById)
router.post('/', FileUploader.single('profileImage'), createEmployee);

module.exports = router;