from django.conf import settings


def add_minify_vuejs_context_processor(request):
    return {'use_minified_vuejs': settings.USE_MINIFIED_VUEJS}
