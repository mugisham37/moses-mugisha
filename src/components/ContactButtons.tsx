export default function ContactButtons() {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <a href="mailto:hello@maelle.design" className="primary-button btn-16-semibold">
        hello@maelle.design
      </a>
      <a href="tel:+1234567890" className="primary-button btn-14-medium">
        (123) 456-7890
      </a>
    </div>
  );
}
