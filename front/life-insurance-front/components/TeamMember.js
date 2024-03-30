const TeamMember = ({ name, position, imageSrc, bio }) => {
    return (
      <div className="team-member flex block p-3 bg-white border rounded-lg border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <img class="object-contain" src={imageSrc} alt={name} width={100} height={100}  />
        <div className="team-member-info">
          <h2 className="team-member-name">{name}</h2>
          <p className="team-member-position"><i>{position}</i></p>
          <p className="team-member-bio">{bio}</p>
        </div>
      </div>
    );
  };
  
  export default TeamMember;