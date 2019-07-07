$(document).ready(function() {
  // const hydrationRepo = new HydrationRepository(hydrationData);
  
  $('#js-h2--user').hide();
  $('#js-user-profile').hide();
  $('#js-step-goal-chart').hide();

  $('#js-change-user').click(function() {
    const userRepo = new UserRepository(userData);
    let userID = Math.floor((Math.random() * 50) + 1);
    const specificUser = userRepo.returnUserData(userID);
    const user = new User(specificUser);
    $('#js-user-profile').show();
    removeClasses();
    $('#js-change-user').removeClass('list-item--active');
    $('#js-user').addClass('list-item--active');
    $('#js-first-name').html(user.returnFirstName());
    $('#js-full-name').html(user.name);
    $('#js-address').html(user.address);
    $('#js-email').html(user.email);
    $('#js-friends').html(userRepo.makeFriendNames(userID));
    $('#js-h2--welcome').hide();
    $('#js-step-goal-chart').hide();
    $('#js-h2--user').show();
    updateCharts(user);
  });

  $('#js-user').click(function() {
    $('#js-user-profile').show();
    $('#js-step-goal-chart').hide();

    removeClasses();
    addClasses();
  });

  $('#js-step-goal').click(function() {
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').show();
    
    removeClasses();
    addClasses();
  });

  $('#js-hydration').click(function() {
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();

    removeClasses();
    addClasses();
  });

  $('#js-sleep').click(function() {
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();

    removeClasses();
    addClasses();
  });

  $('#js-min-active').click(function() {
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();

    removeClasses();
    addClasses();
  });

  $('#js-distance').click(function() {
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();

    removeClasses();
    addClasses();
  });

  $('#js-flights').click(function() {
    $('#js-user-profile').hide();
    $('#js-step-goal-chart').hide();

    removeClasses();
    addClasses();
  });

  function removeClasses() {
    $('.list-item').each(value => {
      let id = $('.list-item')[value].id;
      let clickedID = event.target.id;
      if (id !== clickedID) {
        $(`#${id}`).removeClass('list-item--active');
      }
    })
  }

  function addClasses() {
    let clickedID = event.target.id;
    $(`#${clickedID}`).addClass('list-item--active');
  }

  function updateStepGoalChart(user) {
    stepGoalChart.data.labels[0] = user.name;
    stepGoalChart.data.datasets[0].data[0] = user.dailyStepGoal;
    stepGoalChart.update();
  }

  function updateCharts(user) {
    updateStepGoalChart(user);
  }

  var stepGoalChart = new Chart($("#js-step-goal-chart"), {
    type: 'bar',
    data: {
      labels: ["", "All Users"],
      datasets: [
        {
          label: "Daily Step Goal",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [0, 6700]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: false,
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
            fontSize: 16,
            maxTicksLimit: 12,
            min: 0,
            max: 12000,
            stepSize: 2000,
          }
        }]
      }
    }
  });

  // let foundUser = hydrationRepo.returnUserHydrationData(userID);
  // const hydration = new Hydration(foundUser);
  // $('#js-water-consumed-today').html(hydration.returnFluidOunces("2019/06/15"));

  
});