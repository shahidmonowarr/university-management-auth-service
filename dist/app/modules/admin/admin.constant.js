"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminFilterableFields = exports.adminSearchableFields = exports.bloodGroup = exports.gender = void 0;
exports.gender = ['male', 'female'];
exports.bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
exports.adminSearchableFields = [
    'id',
    'email',
    'contactNo',
    'name.firstName',
    'name.lastName',
    'name.middleName',
    'designation',
];
exports.adminFilterableFields = [
    'searchTerm',
    'id',
    'bloodGroup',
    'email',
    'contactNo',
    'emergencyContactNo',
    'designation',
];
