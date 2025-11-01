import { v4 as uuidv4 } from 'uuid';

import { db } from '@/server/db/drizzle';
import { todo } from '@/server/db/schema/todo-schema';

async function createTodo(formData: FormData): Promise<void> {
  'use server';

  const text = formData.get('text');

  // Bei Drizzle brauchst du normalerweise keine ID manuell zu setzen
  const newTodo = await db
    .insert(todo)
    .values({
      id: uuidv4(),
      text: text as string,
      done: false,
    })
    .returning(); // .returning() gibt die eingefügten Daten zurück
}

const TodoPage = () => {
  return (
    <form action={createTodo}>
      <input type="text" name="text" />
      <button type="submit">Create</button>
    </form>
  );
};

export default TodoPage;
