import * as z from 'zod';

const AppointmentSchema = z.object({
  appointmentId: z.string(),
  appointmentDate: z.coerce.date(),
  appointmentStartTime: z.string(),
  appointmentEndTime: z.string(),
  ownerName: z.string(),
  ownerPhone: z.string(),
  petName: z.string(),
  petSize: z.string(),
  petBreed: z.string(),
  servicesName: z.array(z.string()),
  notes: z.string(),
  status: z.string(),
});

const AppointmentResponseBodySchema = z.object({
  appointments: z.array(AppointmentSchema),
});

export const AppointmentResponseSchema = z.object({
  success: z.boolean(),
  statusCode: z.number(),
  body: AppointmentResponseBodySchema,
  errorCode: z.string().optional(),
  errorReason: z.string().optional(),
});

export type AppointmentResponse = z.infer<typeof AppointmentResponseSchema>;
export type AppointmentResponseBody = z.infer<typeof AppointmentResponseBodySchema>;
export type Appointment = z.infer<typeof AppointmentSchema>;
