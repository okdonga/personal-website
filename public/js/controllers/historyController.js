app.controller('historyController', function($scope) {
  $scope.stories = [
    {
      id: 1,
      title: 'Dev Bootcamp | SF',
      image: 'img/filler.jpg',
      position: 'Full-Stack Developer',
      description: 'Learning to become a professional web developer in 18 weeks\n Built professional web applications using Ruby, Ruby on Rails, JavaScript, HTML/CSS\n Developed proficient knowledge of Git workflow and immersed in Agile production environment',
      dates: 'June 2015 - Nov 2015'
    },
    {
      id: 2,
      title: 'KB Financial Group | Seoul',
      image: 'img/filler.jpg',
      position: 'Investor Relations Team',
      description: 'Managed the business report filing process of KB, Korea’s largest financial group.\n Preparing quarterly filings to Korean Financial Supervisory Services (FSS)',
       dates: 'July 2012 - June 2015'
    },
    {
      id: 3,
      title: 'KB Kookmin Bank | Seoul',
      image: 'img/filler.jpg',
      position: 'Trade Finance / Product Sales',
      description: 'Optimized the remittance process of KB\'s outbound and inbound corporate clients\n Operated FX transaction desk and opened foreign currency accounts',
      dates: 'July 2011 - July 2012'
    },
    {
      id: 4,
      title: 'The London School of Economics (LSE) | London ',
      image: 'img/filler.jpg',
      description: 'Bachelor of Science in Accounting and Finance',
      dates: 'Oct 2008 - July 2011'
    },
  ];
});