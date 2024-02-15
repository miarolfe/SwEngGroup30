const Dropdown = () => {
  return (
    <>
      <label className="text-white">Label</label>
      <select className="glass hover:glass-darker w-full h-14 border pl-3 pr-3 mt-2 rounded-md shadow transition-colors">
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="maybe">Maybe</option>
      </select>
    </>
  );
};

export default Dropdown;
