app.controller('mainController', function($scope) {
  $scope.message = "About o(n) results";
  $scope.numLimit = 130;
  $scope.news = [
    {
      id: 0,
      title: 'Full-Stack Developer',
      image: 'img/filler.jpg',
      description: 'Built professional web applications using Ruby, Ruby on Rails, JavaScript, HTML/CSS\n Developed proficient knowledge of Git workflow and immersed in Agile production environment\n 19 week intensive program to become a professional full-stack developer, committing 60-80 hours per week',
      date: new Date('2015', '11', '10'),
      hours: '+1000',
      likes: 0,
      button: 'subscribe',
      link: 'https://katie200.herokuapp.com'
    },
    {
      id: 1,
      title: 'Meet the Need connects junior developers',
      image: 'img/group.jpg',
      description: 'Developed a platform to connect junior developers with people in need of technology expertise.',
      technologies: 'Ruby on Rails, jQuery, Ajax, Postgres, ActiveRecord',
      hours: '+60',
      likes: 0,
      button: 'HD',
      link: 'https://meet-the-need-app.herokuapp.com'
    },
    {
      id: 2,
      title: 'Tech Hub',
      image: 'img/h1b.png',
      description: 'Built an Sinatra-based web application to find tech companies that sponsor work visa in SF',
      technologies: 'Ruby, JavaScript, Sinatra, HTML/CSS',
      hours: '+1000',
      likes: 0,
      button: 'HD',
      link: 'http://shielded-mesa-3923.herokuapp.com'
    },
  ];

  $scope.skills = ['Ruby', 'JavaScript', 'Ruby on Rails', 'Postgres', 'ActiveRecord', 'Sinatra', 'Angular', 'HTML/CSS', 'View all'];

  $scope.socials = [
    {
      link: 'https://github.com/okdonga',
      image: 'img/github-logo.jpeg'
    },
    {
      link: 'https://twitter.com/okdong',
      image: 'img/twitter-logo.png'
    },
    {
      link: 'https://linkedin/in/okdonga',
      image: 'img/linkedin-logo.png'
    }
  ];
});
