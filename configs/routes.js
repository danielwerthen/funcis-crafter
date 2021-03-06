module.exports = {
  home: {
    path: '/',
    method: 'get',
    page: 'home',
    label: 'Home',
    action: function (context, payload, done) {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Home | flux-examples | routing' });
      done();
    }
  },
  about: {
    path: '/about',
    method: 'get',
    page: 'about',
    label: 'About',
    action: function (context, payload, done) {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'About | flux-examples | routing' });
      done();
    }
  },
  func: {
    path: '/function',
    method: 'get',
    page: 'function',
    label: 'Function',
    action: function (context, payload, done) {
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Function builder  | routing' });
      done();
    }
  },
  dynamicpage: {
    path: '/page/:id',
    method: 'get',
    page: 'page',
    action: function (context, payload, done) {
      context.dispatch('LOAD_PAGE', { id: payload.params.id });
      context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: payload.params.id + ' [Dynamic Page] | flux-examples | routing' });
      done();
    }
  }
};
