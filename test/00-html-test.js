var test = require('tape')
var tiny = require('tiny-json-http')
var sandbox = require('@begin-functions/sandbox')

test('env', t=> {
  t.plan(1)
  t.ok(sandbox, 'sandbox')
})

test('sandbox.open', t=> {
  t.plan(1)
  sandbox.open(()=> {
    t.ok(true, 'opened')
  })
})

// callback style
test('get /', t=> {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333'
  },
  function win(err, result) {
    if (err) {
      t.fail(err, err)
    }
    else {
      t.ok(true, 'got result')
    }
    console.log(err, result)
  })
})

// promise style
test('get /', t=> {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333'
  }).then(function win(result) {
    t.ok(true, 'got result')
    console.log(result)
  }).catch(function fail(err) {
    t.fail(err, err)
    console.log(err)
  })
})

// async/await style
test('get /', async t=> {
  t.plan(1)
  try {
    var url = 'http://localhost:3333'
    var result = await tiny.get({url})
    t.ok(true, 'got result')
    console.log(result)
  }
  catch(e) {
    t.fail(e, e)
    console.log(e)
  }
})

test('sandbox.close', t=> {
  t.plan(1)
  sandbox.close()
  t.ok(true, 'closed')
})
