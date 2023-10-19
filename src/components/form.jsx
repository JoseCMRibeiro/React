export default function Form({title,children}) 
{
  return (
    <div className="panelForm">
      <h1>{title}</h1>
      {children}
    </div>
  );
}