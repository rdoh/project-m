casper.test.begin('The heading exists', 2, function suite(test){
  casper.start('https://project-m-staging.herokuapp.com',function(){
    test.assertExists('Membership Type');
    })});

  casper.then(function() {
        this.evaluate(function(term) {
            document.querySelector('input[name=isEnrolled][value=yes]').setAttribute('checked', true);
            document.querySelector('input[name=residentialStatus][value=citizen]').setAttribute('checked', true);
            document.querySelector('input[name=isMemberOfOtherParty][value=yesOp]').setAtttribute('checked',true);
        });
     
        this.test.assertExists('You are entitled to a Supporter Membership')}
  );

