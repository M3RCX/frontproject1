module.exports = function(grunt) {
    grunt.initConfig({
         copy: {
               public: {
                    cwd: 'public', 
                    src: ['**'], 
                    dest: 'dist', 
                    expand: true
               }
          }, 
          clean: {
               dist: {
                   src: ['dist']
               }
          },
 
          useminPrepare: {
           html: 'dist/**/*.html'
          },
 
          usemin: {
           html: 'dist/**/*.html'
          },
 
          imagemin:{
               public:{
                    expand: true,
                    cwd: 'public/img',
                    src:['**/*.{png,jpg,gif}'],
                    dest:'dist/img'
               }
          },
 
          rev:{
 
                options: {
                     enconding: 'utf8',
                     algorithm: 'md5',
                     length: 8
                },
 
               imagens:{
                src: ['dist/img/**/*.{png,jpg,gif}']
 
                },
                minificados:{
                     src: ['dist/js/**/*.min.js', 'dist/css/**/*.min.css']
                }
          },
 
          coffee:{
               compilar:{
                    expand: true,
                    cwd: 'public/coffee',
                    src: ['**/*.coffee'],
                    dest: 'public/js',
                    ext:'.js'
               }
          },
 
          sass:{
               compilar:{
                    expand: true,
                    cwd: 'public/css',
                    src: ['**/*.scss'],
                    dest: 'dist/css',
                    ext:'.css'
                }
           },
 
           watch: {
                coffee:{
                     options:{
                          event: ['added','changed']   
                     },
                     files: 'public/coffee/**/*.coffee',
                     tasks: 'coffee:compilar'
                },
 
                sass: {
                     options:{
                          event: ['added','changed']   
                     },
                     files: 'public/css/**/*.scss',
                     tasks: 'sass:compilar'
                },
 
                js: {
                     options:{
                          event: ['changed']   
                     },
                     files: 'public/js/**/*.js',
                     tasks: 'jshint:js'
                },

                
           },
           
           jshint:{
                src:['public/js/**/*.js']
           },
 
           browserSync:{
                public:{
                     bsFiles: {
                          src:['public/**/*']
                     },
                     options:{
                          server:{
                               baseDir: "public"
                          }
                     }
                }
           }
 
 
   });
 
   grunt.registerTask('default', ['dist', 'minifica']);
   grunt.registerTask('dist', ['clean', 'copy']);
   grunt.registerTask('server', ['browserSync', 'watch']);
   //task pra minificação
   grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin', 'imagemin']);
 
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-coffee');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-browser-sync');
   grunt.loadNpmTasks('grunt-usemin');
   grunt.loadNpmTasks('grunt-rev');
 };
 