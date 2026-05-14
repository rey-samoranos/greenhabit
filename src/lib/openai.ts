import OpenAI from 'openai';

   const openai = new OpenAI({
     apiKey: import.meta.env.VITE_OPENAI_API_KEY,
     dangerouslyAllowBrowser: true 
   });

   export async function generateHabitPlan(goal: string) {
     const response = await openai.chat.completions.create({
       model: "gpt-4o-mini", // Efficient and cost-effective model
       messages: [
         { 
           role: "system", 
           content: "You are a sustainability expert. Generate a 7-day checklist for an environmental goal." 
         },
         { role: "user", content: `Goal: ${goal}` }
       ],
     });
     
     return response.choices[0].message.content;
   }