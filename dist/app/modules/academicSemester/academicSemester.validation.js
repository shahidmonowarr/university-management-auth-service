'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AcademicSemesterValidation = void 0;
// req-validation
const zod_1 = require('zod');
const academicSemester_constant_1 = require('./academicSemester.constant');
const createAcademicSemesterZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.enum(
      [...academicSemester_constant_1.academicSemesterTitles],
      {
        required_error: 'Title is required',
      }
    ),
    year: zod_1.z.string({
      required_error: 'Year is required',
    }),
    code: zod_1.z.enum([...academicSemester_constant_1.academicSemesterCodes], {
      required_error: 'Code is required',
    }),
    startMonth: zod_1.z.enum(
      [...academicSemester_constant_1.academicSemesterMonths],
      {
        required_error: 'Start Month is required',
      }
    ),
    endMonth: zod_1.z.enum(
      [...academicSemester_constant_1.academicSemesterMonths],
      {
        required_error: 'End Month is required',
      }
    ),
  }),
});
const updateAcademicSemesterZodSchema = zod_1.z
  .object({
    body: zod_1.z.object({
      title: zod_1.z
        .enum([...academicSemester_constant_1.academicSemesterTitles], {
          required_error: 'Title is required',
        })
        .optional(),
      year: zod_1.z
        .string({
          required_error: 'Year is required',
        })
        .optional(),
      code: zod_1.z
        .enum([...academicSemester_constant_1.academicSemesterCodes], {
          required_error: 'Code is required',
        })
        .optional(),
      startMonth: zod_1.z
        .enum([...academicSemester_constant_1.academicSemesterMonths], {
          required_error: 'Start Month is required',
        })
        .optional(),
      endMonth: zod_1.z
        .enum([...academicSemester_constant_1.academicSemesterMonths], {
          required_error: 'End Month is required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either title and code should be provided or neither',
    }
  );
exports.AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
