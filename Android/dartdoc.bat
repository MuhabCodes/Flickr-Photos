@echo off
rem This file was created by pub v2.12.2.
rem Package: dartdoc
rem Version: 0.44.0
rem Executable: dartdoc
rem Script: dartdoc
if exist "C:\Users\LENOVO\AppData\Local\Pub\Cache\global_packages\dartdoc\bin\dartdoc.dart-2.12.2.snapshot" (
  dart "C:\Users\LENOVO\AppData\Local\Pub\Cache\global_packages\dartdoc\bin\dartdoc.dart-2.12.2.snapshot" %*
  rem The VM exits with code 253 if the snapshot version is out-of-date.
  rem If it is, we need to delete it and run "pub global" manually.
  if not errorlevel 253 (
    goto error
  )
  pub global run dartdoc:dartdoc %*
) else (
  pub global run dartdoc:dartdoc %*
)
goto eof
:error
exit /b %errorlevel%
:eof

