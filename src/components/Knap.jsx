import Link from 'next/link'
import React from 'react'

function Knap({text, id}) {
  return (
    <button type='submit' form={id} className="bg-fooPink-900 p-4 px-8 rounded-full">
      {text}
      <Link href={""}></Link>
    </button>
  );
}

export default Knap