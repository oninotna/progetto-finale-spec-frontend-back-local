// THIS FILE IS AUTO-GENERATED from types.ts - DO NOT EDIT DIRECTLY
import z from 'zod';


// Schema generated from types.ts Bikes type
export const BikesSchema = z.object({
  id: z.number().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  title: z.string({ required_error: "Title is required" }),
  category: z.string({ required_error: "Category is required" }),
  brand: z.string(),
  model: z.string(),
  description: z.string(),
  available_sizes: z.array(z.string()),
  frame_material: z.enum(["carbon", "aluminum"], {
        errorMap: () => ({ message: "Invalid value for 'frame_material'. Expected 'carbon' or 'aluminum'" })
      }),
  wheels_material: z.enum(["carbon", "aluminum"], {
        errorMap: () => ({ message: "Invalid value for 'wheels_material'. Expected 'carbon' or 'aluminum'" })
      }),
  trasmission: z.string(),
  brake: z.string(),
  suspensions: z.enum(["without suspensions", "front suspensions", "full suspensions"], {
        errorMap: () => ({ message: "Invalid value for 'suspensions'. Expected 'without suspensions', 'front suspensions' or 'full suspensions'" })
      }),
  weigth: z.number(),
  price: z.number(),
  image: z.string().optional(),
}).strict(); // Add strict mode to reject extra properties


export function validateBikes(data) {
  try {
    const result = BikesSchema.parse(data);
    return { valid: true, data: result };
  } catch (error) {
    return { 
      valid: false, 
      errors: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    };
  }
}

// Export all validators as a map for dynamic usage
export const validators = {
  "bikes": validateBikes
};

// Export readonly properties for each type to prevent updates
export const readonlyProperties = {
  "bikes": []
};
