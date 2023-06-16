// req-validation
import { z } from 'zod';
import { bloodGroup } from './admin.constant';

const updateAdminZodSchema = z.object({
  body: z
    .object({
      name: z
        .object({
          firstName: z.string().optional(),
          lastName: z.string().optional(),
          middleName: z.string().optional(),
        })
        .optional(),
      dateOfBirth: z.string().optional(),
      gender: z.enum(['male', 'female']).optional(),
      bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      profileImage: z.string().optional(),
      designation: z.string().optional(),
      managementDepartment: z.string().optional(),
    })
    .optional(),
});

export const AdminValidation = {
  updateAdminZodSchema,
};
